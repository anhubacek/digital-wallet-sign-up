/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";
import Geonames from "geonames.js";
import { Select, MenuItem } from "@mui/material";

const geonames = new (Geonames as any)({
  username: "thalesandrade",
  lan: "en",
  encoding: "JSON",
});

interface IProps {
  geoId?: string;
  isCountry?: boolean;
  isCity?: boolean;
  onChange: ({ name, id }: { name: string; id: string }) => void;
  className?: string;
  value?: string;
  name: string;
  fieldsWithErrors: string[];
}

export const GeoLocation = ({ geoId, onChange, isCountry, isCity, name, fieldsWithErrors }: IProps) => {
  const [options, setOptions] = useState<
    [{ geonameId: string; countryName?: string; name?: string }] | []
  >([]);
  const [currentItem, setCurrentItem] = useState("");
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      if (isCountry) {
        const res = await geonames.countryInfo({});
        setOptions(res.geonames);
      } else {
        const res = await geonames.children({ geonameId: geoId });
        if (res.totalResultsCount) {
          setOptions(res.geonames);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    try {
      getData();
    } catch (err) {
      console.error(err);
    }
  }, [geoId, isCountry]);

  const handleChange = (e: any) => {
    setCurrentItem(e.target.value);
    const splittedValue = e.target.value.split(" ");
    onChange({
      name: splittedValue.slice(0, splittedValue.length - 1).join(" "),
      id: splittedValue[splittedValue.length - 1],
    });
  };

  return (
    <Select
      value={currentItem}
      onChange={handleChange}
      sx={{
        borderRadius: "30px",
        height: "32px",
        marginBottom: "20px",
        marginTop: "4px",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
          outline: name && fieldsWithErrors?.includes(name)
            ? "1px solid var(--color-red-500)"
            : "1px solid var(--color-gray-300)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          outline: "1px solid var(--color-yellow-500)",
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            maxHeight: 180,
            maxWidth: 190,
          },
        },
      }}
    >
      {loading ? (
        <MenuItem>Cargando..</MenuItem>
      ) : !loading && !options.length ? (
        <span className="px-3 text-[#4d4d4d] font-[Manjari]">
          {isCity ? "Primero elige una provincia" : "Primero elige un país"}
        </span>
      ) : (
        options.map(
          (value, index) =>
            value && (
              <MenuItem
                key={index}
                className="font-[Manjari] text-[#4d4d4d]"
                value={
                  isCountry
                    ? value.countryName + " " + value.geonameId.toString()
                    : value.name + " " + value.geonameId.toString()
                }
              >
                {isCountry ? value.countryName : value.name}
              </MenuItem>
            )
        )
      )}
    </Select>
  );
};
