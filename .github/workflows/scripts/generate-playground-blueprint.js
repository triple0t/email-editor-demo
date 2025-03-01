const generateWordpressPlaygroundBlueprint = ( branchName ) => {
	const defaultSchema = {
		landingPage: '/wp-admin/edit.php?post_type=editor_demo_mail',

		steps: [
			{
				step: 'login',
				username: 'admin'
			},
			{
				step: 'installPlugin',
				pluginData: {
					resource: 'url',
					url: `https://github-proxy.com/proxy/?repo=triple0t/email-editor-demo&branch=${branchName}`,
				},
				options: {
					activate: true,
				},
			},
		],
	};

	return defaultSchema;
};

async function run( { github, context } ) {
	const commentInfo = {
		owner: context.repo.owner,
		repo: context.repo.repo,
		issue_number: context.issue.number,
	};

	const comments = ( await github.rest.issues.listComments( commentInfo ) )
		.data;
	let existingCommentId = null;

	for ( const currentComment of comments ) {
		if (
			currentComment.user.type === 'Bot' &&
			currentComment.body.includes( 'Test using WordPress Playground' )
		) {
			existingCommentId = currentComment.id;
			break;
		}
	}

	const branchName = context?.payload?.pull_request?.head?.ref || 'unknown';

	const defaultSchema = generateWordpressPlaygroundBlueprint( branchName );

	const url = `https://playground.wordpress.net/#${ JSON.stringify(
		defaultSchema
	) }`;

	const body = `
## Test using WordPress Playground
The changes in this pull request can be previewed and tested using a [WordPress Playground](https://developer.wordpress.org/playground/) instance.
[WordPress Playground](https://developer.wordpress.org/playground/) is an experimental project that creates a full WordPress instance entirely within the browser.

[Click here to test this pull request with WordPress Playground](${ url }).
`;

	if ( existingCommentId ) {
		await github.rest.issues.updateComment( {
			owner: commentInfo.owner,
			repo: commentInfo.repo,
			comment_id: existingCommentId,
			body: body,
		} );
	} else {
		commentInfo.body = body;
		await github.rest.issues.createComment( commentInfo );
	}
}

module.exports = { run };
