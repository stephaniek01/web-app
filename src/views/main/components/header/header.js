import DefaultButton from '../../../components/buttons/defaultButton';

const DefaultHeader = ({}) => {
  return (
    <div className={'w-full h-20 px-4 flex justify-between items-center'}>
      <span></span>

      <div className={'flex flex-row gap-2'}>
        <div className={'flex flex-col items-end'}>
          <span>Daniel Wilson</span>
          <span className={'text-gray-600'}>Junior Doctor</span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
          className={
            'w-10 h-10 rounded-full border border-themeColor flex justify-center items-center'
          }
          alt="avatar"
        />
      </div>
    </div>
  );
};
export default DefaultHeader;
