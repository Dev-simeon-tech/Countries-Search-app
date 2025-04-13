import { Skeleton } from "@mui/material";

export const SkeletonHome = () => {
  return (
    <div className='w-full'>
      <Skeleton variant='rounded' height={135} />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton width='60%' />
    </div>
  );
};

export const SkeletonCountryDetails = () => {
  return (
    <div className='flex flex-col lg:flex-row mt-32 lg:justify-between lg:items-center w-[90%] mx-auto gap-4'>
      <div className='lg:w-[40%] w-full'>
        <Skeleton variant='rectangular' height={320} />
      </div>

      <div className='lg:w-[40%] w-full'>
        <Skeleton variant='text' width='40%' height={50} />
        <div className='flex flex-col lg:flex-row w-full mt-8 gap-4'>
          <div className='flex flex-col w-full gap-3'>
            <Skeleton variant='text' width='60%' />
            <Skeleton variant='text' width='60%' />
            <Skeleton variant='text' width='60%' />
            <Skeleton variant='text' width='40%' />
          </div>
          <div className='flex flex-col w-full gap-3'>
            <Skeleton variant='text' width='60%' />
            <Skeleton variant='text' width='60%' />
            <Skeleton variant='text' width='60%' />
            <Skeleton variant='text' width='40%' />
          </div>
        </div>
      </div>
    </div>
  );
};
