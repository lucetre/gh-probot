/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.log("Yay! The app was loaded!");

  app.on(["issues.opened", "issues.reopened"], async (context) => {
    return context.octokit.issues.createComment(
      context.issue({ body: "Thanks for opening this issue!" })
    );
  });
  
  app.on("issues.closed", async (context) => {
    const issueComment = context.issue({
      body: "Good Bye :(",
    });
    await context.octokit.issues.createComment(issueComment);
  });
};
