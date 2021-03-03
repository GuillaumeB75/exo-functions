
const count = (MAX, MIN, STEP) => {
  for (let i = MAX; i >= MIN; i -= STEP)
    console.log(i)
}

count(101, 1, 2)