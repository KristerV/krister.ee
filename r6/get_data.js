async function getAllMapData() {
  const maps = [
    "Bank",
    "Border",
    "Chalet",
    "Club House",
    "Coastline",
    "Consulate",
    "Hereford",
    "House",
    "Kafe Dostoyevsky",
    "Kanal",
    "Oregon",
    "Outback",
    "Skyscraper",
    "Theme Park",
    "Villa",
  ];

  const allData = {};
  const requestsPerMap = 50; // Number of requests per map

  for (const map of maps) {
    console.log(`Fetching data for ${map}...`);
    allData[map.toLowerCase()] = {};

    for (let i = 0; i < requestsPerMap; i++) {
      try {
        const response = await fetch(
          `https://tf8jelotg3.execute-api.us-east-2.amazonaws.com/default/getTask?mapName=${encodeURIComponent(map)}&&blacklist[]=Dummy&options[]=images`,
        );

        const data = await response.json();

        // If we have valid data with an image URL
        if (
          Array.isArray(data) &&
          data[0] &&
          data[0][1] &&
          data[0][1].includes("http")
        ) {
          const [question, imageUrl] = data[0];

          // Only add if this question/image combination is unique
          if (
            !allData[map.toLowerCase()][question] ||
            !Object.values(allData[map.toLowerCase()]).includes(imageUrl)
          ) {
            allData[map.toLowerCase()][question] = imageUrl;
          }
        }

        // Add a small delay between requests
        await new Promise((resolve) => setTimeout(resolve, 100));

        // Show progress
        if ((i + 1) % 10 === 0) {
          console.log(`${map}: ${i + 1}/${requestsPerMap} requests completed`);
        }
      } catch (error) {
        console.error(
          `Error fetching data for ${map} (request ${i + 1}):`,
          error,
        );
      }
    }

    console.log(
      `Completed ${map}. Got ${Object.keys(allData[map.toLowerCase()]).length} unique questions.`,
    );
  }

  // Save to file
  console.log(JSON.stringify(allData, null, 2));

  // Download as file
  const blob = new Blob([JSON.stringify(allData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "r6siege_map_data.json";
  a.click();
  URL.revokeObjectURL(url);

  return allData;
}

// Run the function
getAllMapData();
