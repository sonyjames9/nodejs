async function send_movies_mail() {
  try {
    const get_customer = await getCustomer(1);
    console.log("Get customer details...");
    console.log(get_customer.isGold);
    if (get_customer.isGold) {
      const get_top_movies = await getTopMovies();
      console.log("Get top movies for the customer...");
      await sendEmail(get_customer.email, get_top_movies);
      console.log("Drop email with movies...");
      // console.log(email_movies_mail);
    }
  } catch (err) {
    console.log("Error:", err);
  }
}

send_movies_mail();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Sony George", isGold: true, email: "email" });
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve([[email, [movies]]]);
      resolve();
    }, 4000);
  });
}
