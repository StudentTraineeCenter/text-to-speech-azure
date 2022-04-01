import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import { useEffect } from "react";

const SpeechSynthesis = (props) => {
    let language = "en-US-JennyNeural";
    if (props.language === "English") {
        language = "en-US-JennyNeural";
    }
    else if (props.language === "Czech") {
        language = "cs-CZ-VlastaNeural";
    }
    useEffect(() => {
        const speechConfig = sdk.SpeechConfig
            .fromSubscription(process.env.REACT_APP_AZUREKEY, "northeurope");
        speechConfig.speechSynthesisVoiceName = language;

        let synthesizer = new sdk.SpeechSynthesizer(speechConfig);
        synthesizer.speakTextAsync(
            props.text,
            (result) => {
                synthesizer.close();
                return result.audioData;
            }
        );
    }, [props.text])
}
export default SpeechSynthesis;