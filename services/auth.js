const db = require('../config/database');

const findOrCreateUser = async ({ googleProviderId, name, email }) => {
  try {
    const returnedUser = { email, name, googleProviderId, userId: '' };

    const user = await db.query(
      `
        SELECT user_id 
        FROM public.user_google_account 
        WHERE google_provider_id = $1`,
      [googleProviderId]
    );

    if (!user.rows.length) {
      const newUser = await db.query(
        `
        INSERT INTO public.user_google_account
        (name, google_provider_id, email)
        VALUES ($1,$2,$3)
        RETURNING user_id`,
        [name, googleProviderId, email]
      );

      returnedUser.userId = newUser.rows[0].user_id;
      return returnedUser;
    }

    returnedUser.userId = user.rows[0].user_id;
    return returnedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  findOrCreateUser,
};
