export  function NextPage(data)
{
    return {
       type:"GET_NEXT_PAGE",
       payload:data
    };

}

export function PrevPage(data)
{
    return {
       type:"GET_PREV_PAGE",
       payload:data
    };

}