import { Card, CardBody } from "reactstrap";

function Success({form}) {
  if (!form) return <p>Veri bulunamadı.</p>;

  const { boyut, hamur, extra, miktar } = form;

  const secimlerTutar = extra.length * 5;
  const pizzaTutar = 85.5;
  const toplamTutar = (pizzaTutar + secimlerTutar) * miktar;

  return (
    <div className="sonuc"> 
      <p className="head-text1">lezzetin yolda</p>
      <h2 className="head-text2">SİPARİŞ ALINDI</h2>
      <hr/>
      <h4><strong>Position Absolute Acı Pizza</strong></h4>
      <div>
        <p>Boyut: <span>{boyut}</span></p>
        <p>Hamur: <strong>{hamur}</strong></p>
        <p>
          Ek Malzemeler:{" "}
          {extra.map((malzeme) => (
                <strong>
                  {malzeme}
                </strong>
              ))
          }      
        </p>
      </div>

      <Card>
        <CardBody>
          <h5><strong>Sipariş Toplamı</strong></h5>
          <div>
            <span>Seçimler</span>
            <span>{secimlerTutar}₺</span>
          </div>
          <div>
            <span><strong>Toplam</strong></span>
            <span><strong>{toplamTutar}₺</strong></span>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Success;
