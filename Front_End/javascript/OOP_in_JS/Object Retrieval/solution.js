// Define userProfile globally
const userProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    city: "New York",
    street: "123 Main St",
    zipCode: "10001",
  },
};

function main() {
  function getUserDetail(profile, keys) {
    let value = profile;

    for (const key of keys) {
      if (!(key in value)) {
        return "Not available";
      }
      value = value[key];
    }

    return value;
  }

  return getUserDetail;
}

// Calling the function correctly
console.log(main()(userProfile, ["address", "city"])); // "New York"
console.log(main()(userProfile, ["address", "country"])); // "Not available"
console.log(main()(userProfile, ["name"])); // "John Doe"
console.log(main()(userProfile, ["address", "street"])); // "123 Main St"
console.log(main()(userProfile, ["address", "zipCode"])); // "10001"
