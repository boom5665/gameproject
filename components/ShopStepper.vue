<template>
  <div class="stepper">
    <div class="steps-container">
      <div v-for="(step, index) in steps" :key="index" class="step">
        <div :class="['step-circle', { active: currentStep > index }]">
          <span v-if="currentStep > index" class="checkmark">✔</span>
          <span v-else>{{ index + 1 }}</span>
        </div>
        <div class="step-label">{{ step.label }}</div>
        <div class="step-date">{{ step.date }}</div>
        <div class="step-time">{{ step.time }}</div>
        <div v-if="index < steps.length - 1" :class="['step-connector', { completed: currentStep > index }]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.stepper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3b3b3b;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
  width: 100%;
}

.steps-container {
  display: flex;
  width: 100%;
  position: relative;
}

.step {
  text-align: center;
  position: relative;
  flex: 1;
}

.step-connector {
  position: absolute;
  top: 10%;
  left: 97%;
  width: calc(100% - 20px);
  background-color: #757575;
  transform: translateX(-45%);
  z-index: 10;
  height: 4px;
}

.step-connector.completed {
  background: linear-gradient(-45deg, #ffeb3b, #5823e5, #130048, #ffeb3b);
  animation: gradient-5f9aef70 3s ease infinite;
  background-size: 400% 400%;
  transition-duration: 3s;
}

@keyframes gradient {
  0% {
    background-position: 100% 50%;
  }

  50% {
    background-position: 50% 0%;
  }

  100% {
    background-position: 50% 100%;
  }
}


.step-circle {
  width: 24px;
  height: 24px;
  background-color: #757575;
  border-radius: 50%;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #757575;
  position: relative;
  z-index: 11;
}

.step-circle.active {
  background-color: #ffd700;
  color: #3b3b3b;
}

.step-circle .checkmark {
  font-size: 14px;
  color: #3b3b3b;
}

.step-label {
  font-size: 16px;
  margin-bottom: 10px;
}

.step-date,
.step-time {
  font-size: 14px;
  color: #bfbfbf;
}
</style>
