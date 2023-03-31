<template>
  <div class='content'>
    <span class='text_no_shadows'>Times Mackie has lost the game</span>
    <span class='text_shadows'>{{ count }}</span>
    <button class='inc_button' @click='handleButton' :disabled='!isAvailable'>
      <span class='inc_button_available' v-if='isAvailable'>
        Press here if Mackie lost the game
      </span>
      <span class='inc_button_unavailable' v-else>
        <span>{{ minutes }}m {{ seconds }}s</span>
      </span>
    </button>
  </div>
</template>

<script lang='ts'>
export default {
  head() {
    return {
      title: 'Mackie Lost The Game'
    }
  },
  data() {
    return {
      count: 0,
      countDownDate: new Date(),
      minutes: 0,
      seconds: 0,
      isAvailable: false
    }
  },
  mounted() {
    setInterval(() => {
      this.updateTimer();
    }, 1000);
  },
  methods: {
    updateTimer() {
      if (!this.isAvailable) {
        const now = new Date().getTime();
        const distance = this.countDownDate.getTime() - now;

        if (distance < 0) {
          this.minutes = 0;
          this.seconds = 0;
          this.isAvailable = true;
        } else {
          this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        }
      }
    },
    setDateToNowPlus30m() {
      const now = new Date();
      this.countDownDate = new Date(now.getTime() + 30*60000);
      // this.countDownDate = new Date(now.getTime() + 10000);
    },
    handleButton() {
      this.count++;
      this.isAvailable = false;
      this.setDateToNowPlus30m();
      this.updateTimer();
    }
  }
}
</script>

<style lang='scss'>
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --color-primary: #3b8af8;
  --color-secondary: #69A1F0;
  --color-tertiary: #7EAEF2;
  --color-quaternary: #90BAF5;
  --color-quinary: #A2C4F5;
}

body {
  min-height: 100vh;
  font-family: canada-type-gibson, sans-serif;
  font-weight: 300;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: #1a1a27;
}

.content {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.inc_button {
  font-family: bungee, sans-serif;
  font-weight: 400;
  font-size: calc(2rem + 3vw);
  background-color: rgb(255, 123, 123);
  border-radius: 20px;
  border: none;
  color: white;
  padding: 15px 32px;
  margin: 0 5vw 5vw 5vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.inc_button:disabled {
  background-color: rgb(0, 0, 0);
  color: grey;
}

.text_no_shadows {
  font-family: bungee, sans-serif;
  font-weight: 400;
  font-size: calc(2rem + 5vw);
  margin: 0;
  color: var(--color-primary);
}

.text_shadows {
  text-shadow: 3px 3px 0 var(--color-secondary), 6px 6px 0 var(--color-tertiary),
    9px 9px var(--color-quaternary), 12px 12px 0 var(--color-quinary);
  font-family: bungee, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: calc(3rem + 20vw);
  margin: 0;
  color: var(--color-primary);
  color: transparent;
  background-clip: text;
  animation: shadows 2s ease-in infinite, move 2s ease-in infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes shadows {
  0% {
    text-shadow: none;
  }
  10% {
    text-shadow: 3px 3px 0 var(--color-secondary);
  }
  20% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary);
  }
  30% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
  }
  40% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
  }
  50% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
  }
  60% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
  }
  70% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
  }
  80% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary);
  }
  90% {
    text-shadow: 3px 3px 0 var(--color-secondary);
  }
  100% {
    text-shadow: none;
  }
}

@keyframes move {
  0% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(-12px, -12px);
  }
  50% {
    transform: translate(-12px, -12px);
  }
  60% {
    transform: translate(-12px, -12px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

</style>