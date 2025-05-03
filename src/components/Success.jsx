import { Card, CardBody } from "reactstrap";

function Success({form}) {
  if (!form) return <p>Veri bulunamadı.</p>;

  const { boyut, hamur, extra, miktar, name, note} = form;

  const secimlerTutar = extra.length * 5;
  const pizzaTutar = 85.5;
  const toplamTutar = (pizzaTutar + secimlerTutar) * miktar;

  return (
    <div className="sonuc"> 
      <p className="head-text1">lezzetin yolda</p>
      <h2 className="head-text2">SİPARİŞ ALINDI</h2>
      <hr/>
      <h4><strong>Position Absolute Acı Pizza ({miktar} adet)</strong></h4>
      <div className="ozet">
        <p>İsim: <strong>{name}</strong></p>
        <p>Sipariş Notu: <strong>{note}</strong></p>
        <p>Boyut: <strong>{boyut}</strong></p>
        <p>Hamur: <strong>{hamur}</strong></p>
        <p>
          Ek Malzemeler:{" "}
          {extra.map((malzeme, index) => (
                <strong key={index}>
                  {malzeme} {", "}
                </strong>
              ))
          }      
        </p>
      </div>

      <Card className="success-card">
        <CardBody>
          <h5><strong>Sipariş Toplamı</strong></h5>
          <div style={{display: "flex",
            justifyContent: "space-between"}}>
            <span>Seçimler</span>
            <span>{secimlerTutar}₺</span>
          </div>
          <div style={{display: "flex",
            justifyContent: "space-between"}}>
            <span><strong>Toplam</strong></span>
            <span><strong>{toplamTutar}₺</strong></span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Success;
