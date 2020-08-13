export default function({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.userData) {
    return redirect("/account/login?role=2");
  }
}
