export default function ({ store, redirect }: any) {
  if (process.client && !store.getters['auth/logged']) return redirect('/login')
}
