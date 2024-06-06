const targetNode = document.getElementsByClassName("working")[0];
// Sign in button in unified page.
const nextBtn = document.getElementById("next");

if (targetNode && nextBtn) {
  // Options for the observer (which mutations to observe)
  const config = { attributes: true, attributeFilter: ["style"] };

  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    // Add a loader class or anything you'd like to do.
    if (targetNode.style.display == "block") {
      nextBtn.classList.add("loader");
      nextBtn.innerHTML = "Loading...";
    } else {
      nextBtn.classList.remove("loader");
      nextBtn.innerHTML = "Sign In";
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
}