/**
 * Charge vehicle leaving the parking lot
 * @param  number space_id
 * @return number
 */
function getTotalFee()
{
    let time_in  = new Date("04/07/2021 17:00:00");
    let time_out = new Date("04/10/2021 20:00:00");
    let fee_per_day = 5; // 5$/day

    let time_difference = time_out.getTime() - time_in.getTime();
    let days_difference = time_difference / (1000 * 60 * 60 * 24);

    return fee_per_day * Math.round(days_difference); // 15$
}

console.log(getTotalFee());