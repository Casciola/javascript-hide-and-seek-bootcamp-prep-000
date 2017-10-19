function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
        const rankedLists = document.querySelectorAll('.ranked-list');
        const firstList = rankedLists[0];
        const secondList = rankedLists[1];

        let children = firstList.children
        let start = 1
        for (let i = 0; i < children.length; i++) {
          return parseInt(children[i].innerHTML) + i + n;
        };

}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
