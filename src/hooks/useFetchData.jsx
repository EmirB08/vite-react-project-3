import { UserContext } from "../components/UserContext";
import { useContext } from "react";
import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());

export const useFetchData = () => {
    const { kommuneCode, year } = useContext(UserContext);
    const url = `https://data.brreg.no/enhetsregisteret/api/enheter?kommunenummer=${kommuneCode}&fraRegistreringsdatoEnhetsregisteret=${year}-01-01&tilRegistreringsdatoEnhetsregisteret=${year}-12-31&size=9999`;
    const { data, error } = useSWR(url, fetcher);

    return {
        data: data?._embedded?.enheter,
        isLoading: !error && !data,
        isError: error
    };
};
