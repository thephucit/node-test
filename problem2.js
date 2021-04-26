/**
UML: https://drive.google.com/file/d/1miwvEdjydH9c8wlRNRLKs9UgZkftV6OR/view?usp=sharing

System design:
We need the following classes:

SpaceType:
    - name
    - w_from (width from)
    - w_to   (width to)
    - fee_per_day

Space:
    - name
    - space_type_id
    - status (0: available; 1: busy)

SpaceHistory:
    - space_id
    - time_in
    - time_out
    - vehicle_type
    - desc
    ...


- If we have new vehicles besides the Car and Bike, we need to create new `SpaceType`.
- When a vehicle comes the parking lot, determine what type of `SpaceType` the vehicle corresponds to.
- Use method `spaceAvailable` to get location of parking lot space (Space)
- When parking lot space available then update status of that `Space` is 1 (busy) and create new `SpaceHistory`
- Use the `getTotalFee` method to charge a vehicle leaving the parking lot
*/

/* METHODS */

/**
 * choose the appropriate `SpaceType` for the vehicle
 * @param  number space_type_id
 * @return number|false
 */
function spaceAvailable(space_type)
{
    // - space_id: still parking lot space matching
    // - false: parking lot space not available
}

/**
 * Charge vehicle leaving the parking lot
 * @param  number space_id
 * @return number
 */
function getTotalFee(space_id)
{
    // Search `space_id` in `SpaceHistory`, `SpaceHistory` belongsTo `Space` we have `Space`, `Space` belongsTo `SpaceType` we have `fee_per_day`
    // return fee_per_day * Math.round(time_out - time_in);
}