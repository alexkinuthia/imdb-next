import Results from "@/components/Results";

export default async function SearchPage({params}) {

    const { searchTerm } = await params;
    console.log(searchTerm);
    const res =  await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
    const data = await res.json();
    const results= data.results;
    console.log(data);

    if(results && results.length === 0 ){
        return <div><h1 className="text-center pt-6">No results found</h1></div>;
    }
    return <div><Results results={results}/></div>
  
}
