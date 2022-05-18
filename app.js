const allPackages = [
  {
    heavy: true,
    priority: false,
    fragile: false,
    to: "Harrington",
    trackingNumber: "1324kjs",
    image: "/mildlee-7KKy7-TeeVs-unsplash.jpg",
    lost: false,
    location: "Idaho",
    shipped: true,
  },
  {
    heavy: false,
    priority: true,
    fragile: true,
    to: "Mark",
    trackingNumber: "1325sdk",
    image: "/mildlee-7KKy7-TeeVs-unsplash.jpg",
    lost: false,
    location: "California",
    shipped: true,
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    to: "Mick",
    trackingNumber: "jffd147",
    image: "/mildlee-7KKy7-TeeVs-unsplash.jpg",
    lost: false,
    location: "Arizona",
    shipped: true,
  },
  {
    heavy: false,
    priority: false,
    fragile: false,
    to: "Jake",
    trackingNumber: "acdc145",
    image: "/mildlee-7KKy7-TeeVs-unsplash.jpg",
    lost: false,
    location: "Idaho",
    shipped: true,
  },
  {
    heavy: true,
    priority: true,
    fragile: true,
    to: "Brittany",
    trackingNumber: "fgre448",
    image: "/mildlee-7KKy7-TeeVs-unsplash.jpg",
    lost: false,
    location: "California",
    shipped: true,
  },
  {
    heavy: false,
    priority: true,
    fragile: false,
    to: "Zach",
    trackingNumber: "8081baz",
    image: "/mildlee-7KKy7-TeeVs-unsplash.jpg",
    lost: false,
    location: "Arizona",
    shipped: true,
  },
  {
    heavy: true,
    priority: false,
    fragile: true,
    to: "Jeremy",
    trackingNumber: "suz2367",
    image: "/mildlee-7KKy7-TeeVs-unsplash.jpg",
    lost: false,
    location: "California",
    shipped: true,
  },
  {
    heavy: false,
    priority: true,
    fragile: false,
    to: "Nik",
    trackingNumber: "5svf586",
    image: "/mildlee-7KKy7-TeeVs-unsplash.jpg",
    lost: false,
    location: "Arizona",
    shipped: true,
  },
];

let currentPackages = allPackages;
let lostPackage = null;

function startGame() {
  let index = Math.floor(Math.random() * currentPackages.length);
  console.log(index);
  currentPackages[index].lost = true;
  console.log("its me", currentPackages[index]);
  lostPackage = currentPackages[index];
}

function drawPackages() {
  let template = "";
  currentPackages.forEach((package) => {
    template += `
    <div class="col-md-3 bg-light rounded shadow my-1 p-1" onclick="sortPackages('${package.to}')">
    <img class="img-fluid" src="${package.image}" alt="" />
    <p>${package.to}</p>
    </div>    
    `;
  });
  // console.log(currentPackages);
  document.getElementById("packages").innerHTML = template;
}

function guessHeavy() {
  let heavyPackages = currentPackages.filter(
    (package) => package.heavy == true
  );
  console.log(heavyPackages);

  currentPackages = heavyPackages;
  drawPackages();
}

function guessPriority() {
  let priorityPackages = currentPackages.filter(
    (package) => package.heavy == true
  );
  console.log(priorityPackages);

  currentPackages = priorityPackages;
  drawPackages();
}

function guessTo(to) {
  let toPackages = currentPackages.filter(
    (package) => (package.to = package.to)
  );
  console.log(toPackages);
  currentPackages = toPackages;
  drawPackages();
}

function guess(properties) {
  let sorted = currentPackages.filter(
    (package) => package[properties] == lostPackage[properties]
  );
  console.log(sorted);
  currentPackages = sorted;
  drawPackages();
}

function sortPackages(to) {
  let found = currentPackages.find((package) => package.to == to);
  if ((found.to = lostPackage.to)) {
    window.alert("you got me");
    gameReset();
  } else {
    window.alert("not me");
  }
}

function gameReset() {
  currentPackages = allPackages;
  drawPackages();
}

drawPackages();
startGame();
