// What is redux?
// =======> 1) A container where you can store your whole application data. 2) So we call it to state mangement. 3) It doesn't belongs to the component state.

// Why we need it?
// Redux allows you to manage your app's state in a single place and keep changes in your app more predictable and traceable. It makes it easier to reason about changes occurring in your app.

// Redux Architecture: It is made up of view, action, reducer, store.
// 1) view =====> it is react component like it view on the screen for e.g., button, images.
// 2) action =====> collect data from component or API.
// 3) reducer =======> get data from action and send to store.
// 4) store ======> state(data) of complete application. One redux application has only one store.


// Redux with React installation: 
// 1) check npm and node.
// 2) install react js
// 3) install redux ======> npm install redux
// 4) install react-redux ========> npm install react-redux


// file or folder structure
// 1) components ========> like Home.js, Navbar.js.
// 2) containers =========> HomeContainer.js
// 3) services ========> a) Actions folder and file actions.js b)Reducers folders and file reducers.js, index.js(rootreducer = combines all reducer files) c) in services file constants.js