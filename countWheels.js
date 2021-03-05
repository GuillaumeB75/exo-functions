const countWheels = (nb1, nb2, nb3, nb4) => {

  let sum1 = nb1
  let sum2 = nb2 * 2
  let sum3 = nb3 * 4
  let sum4 = nb4 * 6

  let Count = sum1 + sum2 + sum3 + sum4
  return Count
}
console.log(countWheels(9, 3, 7, 2))
