export declare class AudioRecorder {
    private avRecorder;
    private avProfile;
    private avConfig;
    private filePath;
    private file;
    secondCount: number;
    private timer;
    static audioRecorder: AudioRecorder | undefined;
    static mapAudioRecorder: Map<string, AudioRecorder>;
    static GetAudioRecorder(): AudioRecorder;
    static GetAudioRecorderById(id: string, flag: number): AudioRecorder | undefined;
    setTimer(timer: number): void;
    clearTimer(): void;
    setAudioRecorderCallback(): void;
    startRecordingProcess(filePath: string): Promise<void>;
    pauseRecordingProcess(): Promise<void>;
    resumeRecordingProcess(): Promise<void>;
    stopRecordingProcess(): Promise<void>;
    getFilePath(): string;
}
