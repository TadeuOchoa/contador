const Video = () => (
  <main className="flex h-screen w-screen items-center justify-center bg-black">
    <video
      src={`${import.meta.env.BASE_URL}video.mp4`}
      controls
      autoPlay
      playsInline
      className="h-full w-full object-contain"
    />
  </main>
);

export default Video;
