/** @jsxImportSource @compiled/react */
import React from 'react';

const labelStyles = { display: 'block', fontWeight: 'bold', fontSize: '11px' };

const fieldStyles = { marginBottom: '16px' };

export function HotelsPage() {
  return (
    <>
      <h1>Search hotels</h1>

      <form>
        <div css={fieldStyles}>
          <label htmlFor="txtLocation" css={labelStyles}>
            Location
          </label>
          <input type="text" id="txtLocation" />
        </div>

        <fieldset css={fieldStyles}>
          <legend css={labelStyles}>Room type</legend>

          <div>
            <input type="radio" name="roomType" id="rbSingle" />
            <label htmlFor="rbSingle">Single</label>
          </div>

          <div>
            <input type="radio" name="roomType" id="rbRouble" />
            <label htmlFor="rbRouble">Double</label>
          </div>

          <div>
            <input type="radio" name="roomType" id="rbKing" />
            <label htmlFor="rbKing" className="radio">
              King
            </label>
          </div>
        </fieldset>

        <div css={fieldStyles}>
          <label htmlFor="sPriority" css={labelStyles}>
            Number of travellers
          </label>
          <select defaultValue="travellers-2" id="sTravellers">
            <option value="travellers-1">1</option>
            <option value="travellers-2">2</option>
            <option value="travellers-3">3</option>
            <option value="travellers-4">4</option>
          </select>
        </div>

        <div css={fieldStyles}>
          <input type="checkbox" id="cbAccessibleRoom" name="accessible-room-required"></input>
          <label htmlFor="cbAccessibleRoom" tabIndex={0}>
            I need an accessible room
          </label>
        </div>

        <button id="btnSearch">Search</button>
      </form>
    </>
  );
}
