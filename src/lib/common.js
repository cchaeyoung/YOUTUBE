export function convertDate(dateValue){
    const publishedDate  = new Date(dateValue) ; 
    const currentDate = new Date();
    const seconds =  (currentDate.getTime()-publishedDate.getTime()) / 1000;
    let result ; 
    if(seconds < 10 ){
        result = `방금 전`;
    }else if (seconds < 60) {
        result = `${seconds}초 전`;
    }else if (seconds < 3600) {
        result =  `${Math.floor(seconds / 60)}분 전`;
    }else if (seconds < 86400) {
        result = `${Math.floor(seconds / 3600)}시간 전`;
    } else if (seconds < 604800) {
        result = `${Math.floor(seconds / 86400)}일 전`;
    } else if (seconds < 2592000) {
        result = `${Math.floor(seconds / 604800)}주 전`;
    } else if (seconds < 31536000) {
        result = `${Math.floor(seconds / 2592000)}달 전`;
    } else {
        result = `${Math.floor(seconds / 31536000)}년 전`;
    }
    return result;
}