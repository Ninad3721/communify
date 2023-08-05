import { JitsiMeeting, JaaSMeeting, JitsiMeetExternalAPI } from "@jitsi/react-sdk";

const VideoChatModule = () => {
    const generateRoomName = () => `JitsiMeetRoomNo${Math.random() * 100}-${Date.now()}`;
    const handleJitsiIFrameRef2 = iframeRef => {
        iframeRef.style.marginTop = '10px';
        iframeRef.style.padding = '5px';
        iframeRef.style.width = '3200px'
        iframeRef.style.height = '720px';
        iframeRef.style.marginRight = '150px';
        iframeRef.style.borderRadius = '30px';
    };

    return (
        // <>    <JaaSMeeting
        //     appId={null}
        //     roomName="vpaas-magic-cookie-bfac460f8a1a42cb91e2e511758e24ef/SampleAppLongLikesFoundLately"
        //     jwt={"eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtYmZhYzQ2MGY4YTFhNDJjYjkxZTJlNTExNzU4ZTI0ZWYvZjU2OTdlLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2OTExNjQ5NjksImV4cCI6MTY5MTE3MjE2OSwibmJmIjoxNjkxMTY0OTY0LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtYmZhYzQ2MGY4YTFhNDJjYjkxZTJlNTExNzU4ZTI0ZWYiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOmZhbHNlLCJvdXRib3VuZC1jYWxsIjpmYWxzZSwic2lwLW91dGJvdW5kLWNhbGwiOmZhbHNlLCJ0cmFuc2NyaXB0aW9uIjpmYWxzZSwicmVjb3JkaW5nIjpmYWxzZX0sInVzZXIiOnsiaGlkZGVuLWZyb20tcmVjb3JkZXIiOmZhbHNlLCJtb2RlcmF0b3IiOnRydWUsIm5hbWUiOiJUZXN0IFVzZXIiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTE2NDk0Nzc3OTQ1NzQ5MDM0NzczIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJ0ZXN0LnVzZXJAY29tcGFueS5jb20ifX0sInJvb20iOiIqIn0.MnLyDoPtXwLXcbY - AV7J2rihzRAdfyHzjPp8X_83b15uL87YpMyWh4GsYwH1T1MBVGN9pJCYkLw1qaO7fMRYI9tjNhMp5xRhN_nxBfHxYgnpcQVopnC7QwgsJPwcmnkUJ5c0_kR_ylakJFN4m8RP7D25errBfxKiRJCw - HvE9QV80xXhvQaj0ObF9aVxqyoU26NkvVj_XpaXy0z03Gxtylr - T3FJprzGh9CSbQ_o6d_EixeNUGL_HjuCiWY6jeCzIdaeAXl9tMWeIrjgv - tENX7KYUqBD2JJ20xfgbjd3UmBKUglutT43n5RDuWFHIbadYTcxZNyXhPpOYwEVdmfJA"}
        //     configOverwrite={{
        //         disableThirdPartyRequests: true,
        //         disableLocalVideoFlip: true,
        //         backgroundAlpha: 0.5
        //     }}
        //     interfaceConfigOverwrite={{
        //         VIDEO_LAYOUT_FIT: 'nocrop',
        //         MOBILE_APP_PROMO: false,
        //         TILE_VIEW_MAX_COLUMNS: 4
        //     }}
        //     // spinner={SpinnerView}
        //     useStaging={true}
        //     onApiReady={(externalApi) => { }}
        // /></>
        <>
            <JitsiMeeting
                roomName={generateRoomName()}
                onConferenceJoined={() => console.log('Conference joined!')}
                onConferenceLeft={() => console.log('Conference left!')}
                getIFrameRef={handleJitsiIFrameRef2}
            />
        </>




    )

}
export default VideoChatModule;