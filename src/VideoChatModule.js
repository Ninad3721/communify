// import "./VideoChatModule.css";
import React, { useEffect, useMemo, useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import {
    MeetingProvider,
    MeetingConsumer,
    useMeeting,
    useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "./API";
import ReactPlayer from "react-player";
import { useAuth0 } from "@auth0/auth0-react";

function JoinScreen({ getMeetingAndToken }) {
    const [meetingId, setMeetingId] = useState(null);
    const onClick = async () => {
        await getMeetingAndToken(meetingId);
    };
    return (
        <div className="relative top-32 left-72 w-72">
            <div>
                <TextField id="outlined-basic" label="Enter Meeting Id" variant="outlined" placeholder="Enter Meeting Id"
                    onChange={(e) => {
                        setMeetingId(e.target.value);
                    }} />
            </div>
            <div>
                <button onClick={onClick}>Join</button>
                {" or "}
                <button onClick={onClick}>Create Meeting</button>
            </div>

        </div>
    );
}

function ParticipantView(props) {
    const micRef = useRef(null);
    const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
        useParticipant(props.participantId);

    const videoStream = useMemo(() => {
        if (webcamOn && webcamStream) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(webcamStream.track);
            return mediaStream;
        }
    }, [webcamStream, webcamOn]);

    useEffect(() => {
        if (micRef.current) {
            if (micOn && micStream) {
                const mediaStream = new MediaStream();
                mediaStream.addTrack(micStream.track);

                micRef.current.srcObject = mediaStream;
                micRef.current
                    .play()
                    .catch((error) =>
                        console.error("videoElem.current.play() failed", error)
                    );
            } else {
                micRef.current.srcObject = null;
            }
        }
    }, [micStream, micOn]);

    return (
        <div>
            <p>
                Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
                {micOn ? "ON" : "OFF"}
            </p>
            <audio ref={micRef} autoPlay playsInline muted={isLocal} />
            {webcamOn && (
                <ReactPlayer
                    //
                    playsinline // very very imp prop
                    pip={false}
                    light={false}
                    controls={false}
                    muted={true}
                    playing={true}
                    //
                    url={videoStream}
                    //
                    height={"300px"}
                    width={"300px"}
                    onError={(err) => {
                        console.log(err, "participant video error");
                    }}
                />
            )}
        </div>
    );
}

function Controls(props) {
    const { leave, toggleMic, toggleWebcam } = useMeeting();
    return (
        <div>
            <button onClick={() => leave()}>Leave</button>
            <button onClick={() => toggleMic()}>toggleMic</button>
            <button onClick={() => toggleWebcam()}>toggleWebcam</button>
        </div>
    );
}

function MeetingView(props) {
    const [joined, setJoined] = useState(null);
    //Get the method which will be used to join the meeting.
    //We will also get the participants list to display all participants
    const { join, participants } = useMeeting({
        //callback for when meeting is joined successfully
        onMeetingJoined: () => {
            setJoined("JOINED");
        },
        //callback for when meeting is left
        onMeetingLeft: () => {
            props.onMeetingLeave();
        },
    });
    const joinMeeting = () => {
        setJoined("JOINING");
        join();
    };

    return (
        <div className="container  relative top-32 left-72 w-72">
            <h3>Meeting Id: {props.meetingId}</h3>
            {joined && joined == "JOINED" ? (
                <div>
                    <Controls />
            //For rendering all the participants in the meeting
                    {[...participants.keys()].map((participantId) => (
                        <ParticipantView
                            participantId={participantId}
                            key={participantId}
                        />
                    ))}
                </div>
            ) : joined && joined == "JOINING" ? (
                <p>Joining the meeting...</p>
            ) : (
                <button onClick={joinMeeting}>Join</button>
            )}
        </div>
    );
}

function VideoChatModule() {
    const [meetingId, setMeetingId] = useState(null);
    const { user } = useAuth0();

    //Getting the meeting id by calling the api we just wrote
    const getMeetingAndToken = async (id) => {
        const meetingId =
            id == null ? await createMeeting({ token: authToken }) : id;
        setMeetingId(meetingId);
    };

    //This will set Meeting Id to null when meeting is left or ended
    const onMeetingLeave = () => {
        setMeetingId(null);
    };

    return authToken && meetingId ? (
        <MeetingProvider
            config={{
                meetingId,
                micEnabled: true,
                webcamEnabled: true,
                name: user.name,
            }}
            token={authToken}
        >
            <MeetingView meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
        </MeetingProvider>
    ) : (
        <JoinScreen getMeetingAndToken={getMeetingAndToken} />
    );
}

export default VideoChatModule;