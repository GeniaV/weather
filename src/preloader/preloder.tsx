import preloaderStyles from "./preloader.module.css";

function Preloader() {
  return (
    <div className={preloaderStyles.container}>
      <div className={preloaderStyles.loader}></div>
    </div>
  )
}

export default Preloader;
