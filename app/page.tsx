async function getData() {
  const res = await fetch('https://fun-api-next.vercel.app/api/activity')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const activity = await getData()
 
  return (
    <main>
      <ul>
        <li>{activity.name }</li>
        <li>{ activity.distance }</li>
        <li>{ activity.duration }</li>
      </ul>
    </main>
  );
}