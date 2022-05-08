import MeetupList from '../components/meetups/MeetupList';
import { useEffect, useState } from 'react/cjs/react.production.min';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'https://images.unsplash.com/photo-1570701876415-cbf477a5139a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        address: 'Some address 5, 12345 Silicon Valley'
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: 'https://images.unsplash.com/photo-1570701876415-cbf477a5139a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        address: 'Some address 5, 12345 Silicon Valley'
    },
    {
        id: 'm3',
        title: 'A third Meetup',
        image: 'https://images.unsplash.com/photo-1570701876415-cbf477a5139a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        address: 'Some address 5, 12345 Silicon Valley'
    },
]

function HomePage() {
    const [loadedMeetups, setLoadedMeetups] = useState();
    useEffect(() => {
        // send a http request and fetch data
    },[])

    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export async function getStaticProps() {
    // will never execute on client side
    return {
        props: {}
    }; // always return it
}

export default HomePage;