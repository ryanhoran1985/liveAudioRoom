import { ParticipantsAudio, useCallStateHooks } from "@stream-io/video-react-sdk"
import { Participant } from "./participant";

export const Participants = () => {
    const { useParticipants } = useCallStateHooks();
    const participants = useParticipants();

    return (
        <div className="participants-panel">
            <div className="participants">

                <ParticipantsAudio participants={participants} />
                {participants.map((p) => <Participant participant={p} key={p.sessionId} />)}
            </div>
        </div>
    );
};