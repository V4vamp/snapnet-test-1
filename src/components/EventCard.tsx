import styles from "./styles.module.css";
import type { Event } from '../types/types';
import Poster from "../assets/poster.png";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

interface EventCardProps {
    event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
    return (
        <div className={styles.eventCard}>
            <div className={styles.imageCard}>
                <img src={Poster} alt="" />
                <div className={styles.textCard}>
                    <span>
                        <CiCalendarDate size={20} />
                        <p>{event.date}</p>

                    </span>
                </div>
            </div>
            <div className={styles.contentCard}>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <span>
                    <IoLocationOutline size={16} />
                    <p>{event.location}</p>
                </span>
                <h4>
                    Organized by: <span>{event.organizer}</span>
                </h4>
            </div>
        </div>
    )
}

export default EventCard
