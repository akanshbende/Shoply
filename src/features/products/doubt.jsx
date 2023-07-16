import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";
// console.log(config);
const getProducts = async (data) => {
  // console.log(`${base_url}product?${data?.brand ? `brand=${data?.brand}&&`)
  const response = await axios.get(
    `${base_url}product?${data?.brand ? `brand=${data?.brand}&&` : ""}${
      data?.tag ? `tags=${data?.tag}&&` : ""
    }${data?.category ? `category=${data?.category}&&` : ""}${
      data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""
    }${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""}${
      data?.sort ? `sort=${data?.sort}&&` : ""
    }`
  );

  if (response.data) {
    return response.data;
  }
};

export const getAllProducts = createAsyncThunk(
  "product/get",
  async (data, thunkAPI) => {
    try {
      return await productService.getProducts(data);
      // console.log("product slice", userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
      // console.log("product slice", error);
    }
  }
);

function doubt() {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  //Filter Status
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const [sort, setSort] = useState(null);
  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category, minPrice, maxPrice]);

  const getProducts = () => {
    dispatch(
      getAllProducts({ sort, tag, brand, category, minPrice, maxPrice })
    );
  };
  return (
    <>
      <ul className="ps-0">
        {categories &&
          [...new Set(categories)].map((item, index) => {
            return (
              <li key={index} onClick={() => setCategory(item)}>
                {item}
              </li>
            );
          })}
      </ul>
      <div>
        {tags &&
          [...new Set(tags)].map((item, index) => {
            return (
              <span
                key={index}
                className="badge bg-light text-secondary rounded-3 py-2 px-3"
                onClick={() => setTag(item)}
              >
                {item}
              </span>
            );
          })}
      </div>
      <div>
        {brands &&
          [...new Set(brands)].map((item, index) => {
            return (
              <span
                key={index}
                className="badge bg-light text-secondary rounded-3 py-2 px-3"
                onClick={() => setBrand(item)}
              >
                {item}
              </span>
            );
          })}
      </div>
      <div>
        <select
          // id="demo-select-small"
          placeholder="Featured"
          label="Featured"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{
            padding: 5,
            borderRadius: "5px",
            outline: "none",
            border: "none",
            backgroundColor: "#4d5765",
            color: "#FFFFFF",
          }}
        >
          <option value="title">Alphabetically, A-Z</option>
          <option value="-title">Alphabetically, Z-A</option>
          <option value="price">Price, Iow to high</option>
          <option value="-price">Price, high to low</option>
          <option value="createdAt">Date, old to new</option>
          <option value="-createdAt">Date, new to old</option>
        </select>
      </div>
    </>
  );
}

export default doubt;
