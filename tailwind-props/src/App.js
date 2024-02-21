
import Card from "./components/card";
import BgChanger from "./components/bgChanger";
function App() {

  const imageUrl1='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT3U3ref_VW_34FR+watch-case-45-aluminum-pink-nc-s9_VW_34FR+watch-face-45-aluminum-pink-s9_VW_34FR_WF_CO_GEO_IN?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=cG1TdmNGMEdiK0toTWlCU01yRlIzbk0zNmJwS21GSEN1QlZhZzcwZ0NZbXlESTJEU21VQ3kwMTlnSk9SWXc3T1lmQTM3dWwxOEVOeWkrSnZJS3hUWHAzRndhM081MHR0eDYrdDVpRkduYlBvRFBDZ2ppL3VKbG5SaHlPeG9SOGNWRGRkNWd6OXhEb2lBTXYxZnpxbGdEanlpa2c4cm9CV25oRTZ3N0FCaUk1SHU3NmZyQzBTVVZ5ZWlSanV5V2tOdkZ1emhkYWNycmJka1dOU01FKzNBdk1TeDNjenB2aXlUWmFUa3VBR0QzdDlHMEtMOTlzblhEbnBHZmlSUjhEUw'
  const imageUrl2="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/11/apple-watch-s7-1636541092.jpg"
  return (

    <div>
    {/* <h1 className="text-3xl font-bold  bg-red-600">
            hello world!
        </h1>
    <div className='flex' >
       <Card  prize='60000' star='4.5' imageUrl={imageUrl1} />
        <Card  prize='90000' star='4' imageUrl={imageUrl2}/>


    </div> */}


       <BgChanger/>


    </div>
  );
}

export default App;
