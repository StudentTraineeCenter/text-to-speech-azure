import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import {SpeechSynthesisOutputFormat} from "microsoft-cognitiveservices-speech-sdk";
import { useEffect } from "react";

const SpeechSynthesis = (props) => {
    // jazyk
    let language = "en-US";
    if (props.language === "Czech") {
        language = "cs-CZ";
    }
    // řeč
    let voice = (language === "en-US") ? "en-CA-ClaraNeural" : "cs-CZ-AntoninNeural";

    useEffect(() => {
        const speechConfig = sdk.SpeechConfig
            .fromSubscription(process.env.REACT_APP_AZUREKEY, "northeurope");
        // kvalita
        speechConfig.speechSynthesisOutputFormat = SpeechSynthesisOutputFormat.Riff24Khz16BitMonoPcm;
        let synthesizer = new sdk.SpeechSynthesizer(speechConfig);
        synthesizer.speakSsmlAsync(`<speak version="1.0" xml:lang="${language}"><voice name="${voice}"><prosody rate="10%" pitch="0%">${props.text}</prosody></voice></speak>`,
            (result) => {
            synthesizer.close();
            console.log(result.audioData);
            return result.audioData;
       })
    }, [props.text])
}
export default SpeechSynthesis;