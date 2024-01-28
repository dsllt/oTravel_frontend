export function dateDifference(date: string){
  const review_date = new Date(date);
  const today = new Date();
  console.log('review',review_date)
  console.log('today',today)
  const diff = today.getSeconds() - review_date.getSeconds()
  console.log('diff',diff)

}