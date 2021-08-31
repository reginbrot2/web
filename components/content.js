import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
} from "@material-ui/icons"

export const ContentContainer = (props) => {
  return (
    <div
      className={`prose container mx-auto ${
        props.classes ? props.classes : ""
      }`}
    >
      {props.children}
    </div>
  )
}

export const Brotsorte = (props) => {
  return (
    <details className="mb-4">
      <summary className="liant text-xl text-orange-dark flex">
        {props.title}
        <span className="dropdown-icon">
          <ArrowDropDownIcon />
        </span>
        <span className="dropup-icon">
          <ArrowDropUpIcon />
        </span>
      </summary>
      {props.children}
      <small>
        Alle nicht mit &ldquo; * &rdquo; gekennzeichneten Zutaten
        landwirtschaftlichen Ursprungs unterliegen dem Kontrollverfahren gemäß
        EG-Verordnung &ldquo;ökologischer Landbau&rdquo; VO (EG) Nr.834/2007
        DE-ÖKO-007.
      </small>
    </details>
  )
}
