import { PAELLAS, TAMANOS, FIANZA } from '../data/paellas'
import './tablaPaellas.css'

/**
 * Tabla de variedades y precios de paellas. Los datos salen siempre de
 * src/data/paellas.js, así que la página de San Fernando y la de Coslada no
 * pueden acabar mostrando precios distintos.
 */
export default function TablaPaellas() {
  return (
    <div className="tablaPaellas">
      <div className="tablaPaellas__scroll">
        <table>
          <caption className="sr-only">
            Variedades de paella y arroz con sus precios según el tamaño
          </caption>
          <thead>
            <tr>
              <th scope="col">Paella o arroz</th>
              <th scope="col">{TAMANOS.pequena}</th>
              <th scope="col">{TAMANOS.grande}</th>
            </tr>
          </thead>
          <tbody>
            {PAELLAS.map((p) => (
              <tr key={p.nombre}>
                <th scope="row">
                  <span className="tablaPaellas__nombre">{p.nombre}</span>
                  <span className="tablaPaellas__desc">{p.descripcion}</span>
                </th>
                <td>{p.precioPequena} €</td>
                <td>{p.precioGrande} €</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="tablaPaellas__nota">{FIANZA}</p>
    </div>
  )
}
