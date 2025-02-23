import styles from "./FitnessTracker.module.scss";

const WellnessGoals = () => {
  return (
    <div className={styles.fitnessTracker}>
      {/* Steps Card */}
      <div className={styles.card}>
        <h3>
          🚶 Steps
        </h3>
        <p className={styles.stats}>
          3620 / 6000 steps
        </p>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: "60%" }}></div>
        </div>
      </div>

      {/* Active Time Card */}
      <div className={styles.card}>
        <h3>🔥 Active Time</h3>
        <p className={styles.stats}>
          56 / 60 mins &nbsp; | &nbsp; 1712 Kcal &nbsp; | &nbsp; 1.23 km
        </p>
      </div>

      {/* Sleep Card */}
      <div className={styles.card}>
        <h3>🌙 Sleep</h3>
        <p className={styles.stats}>
          6 hrs 30 mins &nbsp; | &nbsp; 11:30 pm - 06:00 am
        </p>
        <div className={styles.sleepGraph}>
          <div className={`${styles.block} ${styles.sleep}`}></div>
          <div className={`${styles.block} ${styles.lightSleep}`}></div>
          <div className={`${styles.block} ${styles.awake}`}></div>
          <div className={`${styles.block} ${styles.sleep}`}></div>
          <div className={`${styles.block} ${styles.lightSleep}`}></div>
        </div>
      </div>
    </div>
  )
}

export default WellnessGoals