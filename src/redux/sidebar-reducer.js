
let initialState = [
	{ id: 1, name: 'Kostya', img: "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863" },
	{ id: 2, name: 'Valera', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-UhQcg5cpN6U22buS434_oeKDCJLiCFQDIrdu20OfiDckf2_mkuMOIXrCIZvLn-shyE&usqp=CAU" },
	{ id: 3, name: 'Lika', img: "https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk" },
];

const sidebarReducer = (state = initialState, action) => {
	return state;
}

export default sidebarReducer;