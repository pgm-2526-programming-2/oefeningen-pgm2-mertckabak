// oproepen van zijn eigen functie

let amountOfMessages = 0;

function showMessage() {
  console.log("Hoi!");

  amountOfMessages = amountOfMessages + 1;

  //  if (amountOfMessages === 10) return; // dit is een one line return
  if (amountOfMessages === 10) {
    return;
  }

  showMessage();
}

showMessage();

//Use cases ? Maken van een menu met submenus, en die hebben weer submenus,
// Tree -> Lijst

const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Explore",
    path: "/explore",
    subpages: [
      {
        name: "Awards",
        path: "/awards",
        subpages: [
          {
            name: "Nominees",
            path: "/nominees",
          },
          {
            name: "Sites of the day",
            path: "/sotd",
          },
        ],
      },
      {
        name: "Blog",
        path: "/blog",
      },
    ],
  },
];

//Oefening :
//Log al de pagina's en hun paths in de console
// 1. ZONDER RECURSIE
function showMenuWithoutRecursion(list) {
  for (const item of list) {
    console.log("Name: ", item.name, "-- ", item.path);

    if (item.subpages) {
      for (const subitem of item.subpages) {
        console.log("Name: ", subitem.name, "-- ", subitem.path);

        if (subitem.subpages) {
          for (const subsubitem of subitem.subpages) {
            console.log("Name: ", subsubitem.name, "-- ", subsubitem.path);
          }
        }
      }
    }
  }
}

showMenuWithoutRecursion(menu);

//2. MET RECURSIE

function showItem(item) {
  console.log("Name:", item.name, "--", item.path);
}

function showMenuWithRecursion(list) {
  for (const item of list) {
    showItem(item);

    if (item.subpages) {
      showMenuWithRecursion(item.subpages);
    }
  }
}

showMenuWithRecursion(menu);
