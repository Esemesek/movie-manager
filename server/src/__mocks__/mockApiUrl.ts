export default (title: string) => new RegExp(`http:\/\/omdbapi\.com\/(.+)&t=${title}`);
