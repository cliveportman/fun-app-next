import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

async function getData() {
  const res = await fetch('https://fun-api-next.vercel.app/api/activity'); 
  if (!res.ok) throw new Error('Failed to fetch data'); 
  return res.json();
}
 
export default async function Page() {
  const activity = await getData();
 
  return (
    <main className="p-6">
      <ul className="text-yellow-200 text-5xl font-bold leading-tight">
        <li className="font-bold">{activity.name }</li>
        <li>{ (activity.distance / 1000).toLocaleString('en-GB', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) } km</li>
        <li>{ dayjs.duration(activity.duration, 'seconds').format('H [hrs] m [min]') }</li>
      </ul>
    </main>
  );

}