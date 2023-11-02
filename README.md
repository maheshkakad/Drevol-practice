import React, { useState, useEffect } from "react";

function MyComponent() {
  const initialData = [
    // Your data here
    {
      Release: "2023.10 B",
      DataList: [
        {
          Product: "WinBlue",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win8",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win7",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win21h2",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win21",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win8",
          P90TTPRData: "5.32"
        }
      ]
    },
    {
      Release: "2023.9 B",
      DataList: [
        {
          Product: "WinBlue",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win8",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win7",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win21h2",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win21",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win8",
          P90TTPRData: "5.32"
        }
      ]
    },
    {
      Release: "2023.8 B",
      DataList: [
        {
          Product: "WinBlue",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win8",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win7",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win21h2",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win21",
          P90TTPRData: "5.32"
        },
        {
          Product: "Win8",
          P90TTPRData: "5.32"
        }
      ]
    }
  ];

  const [data, setData] = useState(initialData);
  const [selectedReleases, setSelectedReleases] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    filterData();
  }, [selectedReleases, selectedProducts]);

  const filterData = () => {
    const filteredData = data
      .filter((group) => {
        const releaseMatches =
          selectedReleases.length === 0 ||
          selectedReleases.includes(group.Release);
        return releaseMatches;
      })
      .map((group) => {
        const filteredProducts =
          selectedProducts.length === 0
            ? group.DataList
            : group.DataList.filter((item) =>
                selectedProducts.includes(item.Product)
              );
        return { ...group, DataList: filteredProducts };
      });

    setFilteredData(filteredData);
  };

  const handleReleaseChange = (event) => {
    const releaseValue = event.target.value;
    if (selectedReleases.includes(releaseValue)) {
      setSelectedReleases(
        selectedReleases.filter((release) => release !== releaseValue)
      );
    } else {
      setSelectedReleases([...selectedReleases, releaseValue]);
    }
  };

  const handleProductChange = (event) => {
    const productValue = event.target.value;
    if (selectedProducts.includes(productValue)) {
      setSelectedProducts(
        selectedProducts.filter((product) => product !== productValue)
      );
    } else {
      setSelectedProducts([...selectedProducts, productValue]);
    }
  };

  return (
    <div>
      <label>
        Select Releases:
        {["2023.10 B", "2023.9 B", "2023.8 B"].map((release) => (
          <label key={release}>
            <input
              type="checkbox"
              value={release}
              checked={selectedReleases.includes(release)}
              onChange={handleReleaseChange}
            />
            {release}
          </label>
        ))}
      </label>

      <label>
        Select Products:
        {["WinBlue", "Win8", "Win7", "Win21h2", "Win21"].map((product) => (
          <label key={product}>
            <input
              type="checkbox"
              value={product}
              checked={selectedProducts.includes(product)}
              onChange={handleProductChange}
            />
            {product}
          </label>
        ))}
      </label>

      <div>
        <ul>
          {filteredData.map((group, index) => (
            <li key={index}>
              Release: {group.Release}
              <ul>
                {group.DataList.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    Product: {item.Product}, P90TTPRData: {item.P90TTPRData}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyComponent;
