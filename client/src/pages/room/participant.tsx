import { Avatar, StreamVideoParticipant } from "@stream-io/video-react-sdk"

interface Props {
    participant: StreamVideoParticipant;
}

export const Participant = (props: Props) => {
    return <div className="participant">


        <Avatar 
            imageSrc={props.participant.image} 
            style={{ width: 60, height: 60, borderRadius: 50, boxShadow: props.participant.isSpeaking ? "0 0 1px 2px green" : "none"}}
        />
        <p>{props.participant.name}</p>
    </div>
}