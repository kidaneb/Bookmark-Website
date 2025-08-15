const hamburgerMenuBtn = document.querySelector("#hamburger-menu-btn");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const logo = document.querySelector("#logo");
const simpleBookmarkingBtn = document.querySelector("#simple-bookmarking-btn");
const speedySearchingBtn = document.querySelector("#speedy-searching-btn");
const easySharingBtn = document.querySelector("#easy-sharing-btn");
const simpleBookmarkingBtnUnderline = document.querySelector(
  "#simple-bookmarking-btn-underline"
);
const speedySearchingBtnUnderline = document.querySelector(
  "#speedy-searching-btn-underline"
);
const easySharingBtnUnderline = document.querySelector(
  "#easy-sharing-btn-underline"
);

const simpleBookmarkingContent = document.querySelector(
  "#simple-bookmarking-content"
);
const speedySearchingContent = document.querySelector(
  "#speedy-searching-content"
);
const easySharingContent = document.querySelector("#easy-sharing-content");

hamburgerMenuBtn.addEventListener("click", function () {
  // # first toggle the icon between hamburger-menu and close button
  hamburgerMenuBtn.classList.toggle("open");

  // toggle logo image

  if (hamburgerMenuBtn.classList.contains("open")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }

  // # toggle the hamburger menu
  hamburgerMenu.classList.toggle("hidden");
});

// when tabs button clicked

// function to run when buttons clicked

// to add block class and remove hidden class from an element
function addBlockRemoveHidden(elementName) {
  if (elementName.classList.contains("hidden")) {
    elementName.classList.remove("hidden");
    elementName.classList.add("block");
  } else {
    return;
  }
}

// to add flex class and remove hidden class from an element
function addFlexRemoveHidden(elementName) {
  if (elementName.classList.contains("hidden")) {
    elementName.classList.remove("hidden");
    elementName.classList.add("flex");
  } else {
    return;
  }
}

// to remove block class and add hidden class from an element
function removeBlockAddHidden(elementName) {
  if (!elementName.classList.contains("hidden")) {
    elementName.classList.remove("block");
    elementName.classList.add("hidden");
  } else {
    return;
  }
}

// to remove flex class and add hidden class from an element
function removeFlexAddHidden(elementName) {
  if (!elementName.classList.contains("hidden")) {
    elementName.classList.remove("flex");
    elementName.classList.add("hidden");
  } else {
    return;
  }
}

//1, simple bookmarking button clicked
simpleBookmarkingBtn.addEventListener("click", () => {
  // changing the red underline of the buttons
  addBlockRemoveHidden(simpleBookmarkingBtnUnderline);
  removeBlockAddHidden(speedySearchingBtnUnderline);
  removeBlockAddHidden(easySharingBtnUnderline);
  //   changing the contents
  addFlexRemoveHidden(simpleBookmarkingContent);
  removeFlexAddHidden(speedySearchingContent);
  removeFlexAddHidden(easySharingContent);
});

//2, speedy searching button clicked
speedySearchingBtn.addEventListener("click", () => {
  // changing the red underline of the buttons
  addBlockRemoveHidden(speedySearchingBtnUnderline);
  removeBlockAddHidden(simpleBookmarkingBtnUnderline);
  removeBlockAddHidden(easySharingBtnUnderline);
  //   changing the contents
  addFlexRemoveHidden(speedySearchingContent);
  removeFlexAddHidden(simpleBookmarkingContent);
  removeFlexAddHidden(easySharingContent);
});

//3, easy sharing button clicked
easySharingBtn.addEventListener("click", () => {
  // changing the red underline of the buttons
  addBlockRemoveHidden(easySharingBtnUnderline);
  removeBlockAddHidden(simpleBookmarkingBtnUnderline);
  removeBlockAddHidden(speedySearchingBtnUnderline);
  //   changing the contents
  addFlexRemoveHidden(easySharingContent);
  removeFlexAddHidden(simpleBookmarkingContent);
  removeFlexAddHidden(speedySearchingContent);
});

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// version 1
// function onTabClick(e) {

//    const clickedButton = e.currentTarget;
//   // remove all the block and add hidden to all elements
//   tabs.forEach((tab) => {
//     const buttonChildElement = tab.children[0];
//     const buttonUnderlineElement = buttonChildElement.children[1];

//     const isBlockElement = buttonUnderlineElement.classList.contains("block");
//     if (isBlockElement) {
//       buttonUnderlineElement.classList.remove("block");
//       buttonUnderlineElement.classList.add("hidden");
//     }
//   });

//   // add block to the clicked button

//   const buttonChildElement = clickedButton.children[0];
//   const buttonUnderlineElement = buttonChildElement.children[1];
//   buttonUnderlineElement.classList.remove("hidden");
//   buttonUnderlineElement.classList.add("block");

//   // Panel related codes

//   // get the data-target for the clicked button
//   dataTarget = clickedButton.getAttribute("data-target");

//   panels.forEach((panel) => {
//     // remove all the flex class and add hidden class
//     if (panel.classList.contains("flex")) {
//       panel.classList.remove("flex");
//       panel.classList.add("hidden");
//     }

//     // add flex and remove hidden to the associated panel
//     if (panel.classList.contains(dataTarget)) {
//       panel.classList.remove("hidden");
//       panel.classList.add("flex");
//     }
//   });
// }

// version 2

function onTabClick(e) {
  const clickedButton = e.currentTarget;
  // remove all the block and add hidden to all elements
  tabs.forEach((tab) => {
    const buttonUnderlineElement = tab.querySelector("div > div:nth-child(2)");
    const isClickedButton = tab == clickedButton;
    buttonUnderlineElement.classList.remove("block", "hidden");
    buttonUnderlineElement.classList.add(isClickedButton ? "block" : "hidden");
  });

  // Panel related codes
  // get the data-target for the clicked button
  dataTarget = clickedButton.getAttribute("data-target");

  panels.forEach((panel) => {
    panel.classList.remove("flex", "hidden");
  });

  panels.forEach((panel) => {
    const isClickedPanel = panel.classList.contains(dataTarget);
    panel.classList.add(isClickedPanel ? "flex" : "hidden");
  });
}
